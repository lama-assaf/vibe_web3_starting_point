import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberneticGridShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1) Renderer, Scene, Camera, Clock
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // 2) GLSL Shaders - Modified to match 20px grid size
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233)))
                     * 43758.5453123);
      }

      void main() {
        // normalize coords around center
        vec2 uv    = (gl_FragCoord.xy - 0.2 * iResolution.xy)
                     / iResolution.y;
        vec2 mouse = (iMouse - 0.2 * iResolution.xy)
                     / iResolution.y;

        float t         = iTime * 0.2;
        float mouseDist = length(uv - mouse);

        // warp effect around mouse
        float warp = sin(mouseDist * 20.0 - t * 4.0) * 0.1;
        warp *= smoothstep(0.4, 0.0, mouseDist);
        uv += warp;

        // Calculate grid size - smaller/condensed grid
        float gridScale = iResolution.y / 10.0; // Smaller 10px grid size (was 20px)
        vec2 gridUv = abs(fract(uv * gridScale * 0.1) - 0.5);
        float line  = pow(1.0 - min(gridUv.x, gridUv.y), 40.0);

        // base grid color pulsing - brighter cyberpunk colors
        vec3 gridColor = vec3(0.0, 0.0, 1.0); // Bright cyan
        vec3 purpleColor = vec3(0.5, 0.4, 1.0); // Bright purple/magenta

        // Mix cyan and purple for the grid
        vec3 mixedColor = mix(gridColor, purpleColor, sin(t * 1.5) * 0.5 + 0.5);
        vec3 color = mixedColor * line * (0.8 + sin(t * 2.0) * 0.2);

        // energetic pulses along grid - more visible
        float energy = sin(uv.x * 15.0 + t * 5.0)
                     * sin(uv.y * 15.0 + t * 3.0);
        energy = smoothstep(0.7, 1.0, energy);
        color += vec3(1.0, 0.3, 0.9) * energy * line * 0.8; // Bright pink pulses

        // glow around mouse - teal, matches cursor position
        float glow = smoothstep(0.15, 0.0, mouseDist);
        color += vec3(0.0, 0.8, 0.7) * glow * 1.5; // Teal glow

        // subtle noise
        color += random(uv + t * 0.1) * 0.05;

        gl_FragColor = vec4(color, 0.45); // Increased visibility
      }
    `;

    // 3) Uniforms, Material, Mesh
    const uniforms = {
      iTime:       { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse:      { value: new THREE.Vector2(
                       window.innerWidth / 2,
                       window.innerHeight / 2
                     ) }
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh     = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4) Resize handler
    const onResize = () => {
      const width  = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.iResolution.value.set(width, height);
    };
    window.addEventListener('resize', onResize);
    onResize(); // set initial size

    // 5) Mouse handler
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      uniforms.iMouse.value.set(
        e.clientX - rect.left,
        container.clientHeight - (e.clientY - rect.top)
      );
    };
    window.addEventListener('mousemove', onMouseMove);

    // 6) Animation loop
    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // 7) Cleanup on unmount
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);

      renderer.setAnimationLoop(null);

      const canvas = renderer.domElement;
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="shader-container"
      style={{
        position:      'absolute',
        top:           0,
        left:          0,
        width:         '100%',
        height:        '100%',
        zIndex:        1,
        pointerEvents: 'none'
      }}
      aria-label="Cybernetic Grid animated background"
    />
  );
};

export default CyberneticGridShader;
