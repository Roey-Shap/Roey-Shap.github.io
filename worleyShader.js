const worleyShaderRaw = `
#define NUM_POINTS 10
#define SCREEN_BOUND vec2(0.3, 0.225)
#define POINTS_ON 0

vec3 points[NUM_POINTS];
float pointDistances[NUM_POINTS];
float LP_DISTANCE_FACTOR = 2.0;

float dist(vec3 p1, vec3 p2)
{
    vec3 delta = abs(p2 - p1);
    vec3 raised = pow(delta, vec3(LP_DISTANCE_FACTOR));
    return pow(dot(raised, vec3(1.0)), 1.0 / LP_DISTANCE_FACTOR);
}

float map(float min1, float max1, float value, float min2, float max2)
{
    float d2 = max2 - min2;
    float d1 = max1 - min1;
    float sizeRatio = d2 / d1;

    return (value * sizeRatio) - (min1 * sizeRatio) + min2;
}

void bubbleSort()
{
    bool swappedThisRound = true;
    int j = 0;
    float tmp;
    for (int i = 0; i < NUM_POINTS; i++)
    {
        if (!swappedThisRound) 
        {
            break;
        }
        
        swappedThisRound = false;
        for (j = 0; j < NUM_POINTS - 1; j++)
        {
            if (pointDistances[j] > pointDistances[j + 1])
            {
                tmp = pointDistances[j];
                pointDistances[j] = pointDistances[j + 1];
                pointDistances[j + 1] = tmp;
                swappedThisRound = true;
            }
        }
    }
}


void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    float smallerAxis = min(iResolution.x, iResolution.y);
    vec2 uv = (fragCoord - 0.5 *iResolution.xy) / smallerAxis;
    float zMin = -0.2;
    float zMax = 0.2;
    float z = map(-1.0, 1.0, sin(iTime * 0.2), zMin, zMax);
    float zPercent = map(zMin, zMax, z, 0.0, 1.0);
    vec2 mousePercent = iMouse.xy / iResolution.xy;
    float mouseMin = 0.1;
    float mouseMax = 0.9;
    float mouseSelection = clamp(map(-1.0, 1.0, sin(iTime), 1.0, float(NUM_POINTS)), 1.0, float(NUM_POINTS - 4));
    float brightness = 1.0;
    float pointRadius = 0.03;
    
    LP_DISTANCE_FACTOR = clamp(map(mouseMin, mouseMax, mousePercent.x, 1.0, 8.0), 1.0, 8.0);
    
    vec3 uv3 = vec3(uv, z);
    
    for (int i = 0; i < NUM_POINTS; i++)
    {
        float fi = float(i);
        float percentage = fi / float(NUM_POINTS);
        float v1 = map(-1.0, 1.0, sin(float(8 + 2 * i) * percentage + 0.85 * iTime), -SCREEN_BOUND.x, SCREEN_BOUND.x);
        float v2 = map(-1.0, 1.0, 0.5 * sin(cos(float(4 + 3 * i)) * (1.0 - percentage) + (0.4 * iTime)) + 0.5 * cos(10.0 + 5.0 * float(i) / (map(-1.0, 1.0, sin(iTime), 10.0, 25.0) + 1.0)), -SCREEN_BOUND.y, SCREEN_BOUND.y);
        float v3 = sin(cos(iTime)) * mix(v1, v2, map(-1.0, 1.0, sin(iTime), 0.0, 1.0));
        points[i] = vec3(v1, v2, v3);
        pointDistances[i] = dist(uv3, points[i]);
        
        if (bool(POINTS_ON) && length(points[i].xy - uv) <= pointRadius * map(0.0, 1.0, zPercent, 0.2, 0.7))
        {
            fragColor = vec4(mix(vec3(brightness), vec3(0.0, 1.0, 1.0), 1.0 - zPercent), 1.0);
            return;
        }
    }
    
    bubbleSort();
    
    float fracBetweenN = fract(mouseSelection);
    int n = int(mouseSelection);
    float d1 = pointDistances[n-1];
    float d2 = pointDistances[n];
    float chosenDis = mix(d1, d2, fracBetweenN);
    vec3 col = brightness * vec3(1.0 - (chosenDis / pointDistances[NUM_POINTS-1]));
    float s = map(0.0, 1.0, zPercent, 0.001, 0.05);
    col = round(col / s) * s;


    fragColor = vec4(col,1.0);
}
`;