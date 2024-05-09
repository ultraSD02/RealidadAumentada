var arjsConfig = {
  sourceType: 'webcam', // Tipo de fuente de datos (webcam, image, video)
  debugUIEnabled: false, // Habilitar interfaz de depuración
  detectionMode: 'mono_and_matrix', // Modo de detección (mono, stereo, mono_and_matrix)
  matrixCodeType: '3x3', // Tipo de código de matriz (3x3, 4x4)
  patternRatio: 0.8, // Relación de tamaño del patrón (0.5 - 1.0)
  cameraParametersUrl: 'ruta/a/tus/parametros.dat', // URL del archivo de parámetros de la cámara
  maxDetectionRate: 60, // Tasa máxima de detección (fps)
  trackingMethod: 'best', // Método de seguimiento (best, performance, robustness)
};

// Inicializar la escena de A-Frame con AR.js y aplicar la configuración
var scene = document.querySelector('a-scene');
scene.setAttribute('arjs', arjsConfig);