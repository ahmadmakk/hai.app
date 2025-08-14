import React, { useEffect } from 'react';
import { View } from 'react-native';
import { GLView } from 'expo-gl';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Body3DModel = ({ healthScores }) => {
  useEffect(() => {
    let scene, camera, renderer, model;

    const init = async () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      const glView = document.getElementById('glView');
      glView.appendChild(renderer.domElement);

      const loader = new GLTFLoader();
      model = await loader.loadAsync(require('../assets/models/humanBody.glb'));
      scene.add(model.scene);

      camera.position.z = 5;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <View style={{ flex: 1 }} id="glView">
      {/* Health scores visualization logic can be added here */}
    </View>
  );
};

export default Body3DModel;