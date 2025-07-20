
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import './styles.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [processing, setProcessing] = useState(false);

  const onDrop = acceptedFiles => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
    toast.success("Image uploaded successfully!");
  };

  const handleProcess = () => {
    setProcessing(true);
    toast.info("Processing...");
    setTimeout(() => {
      setProcessing(false);
      toast.success("Operation complete!");
    }, 2000);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="app">
      <div className="binary-background" />
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="title">CyberSteg Tool</motion.h1>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select</p>
      </div>
      {image && (
        <motion.img src={image} alt="Preview" className="preview" initial={{ scale: 0 }} animate={{ scale: 1 }} />
      )}
      <button className="btn" onClick={handleProcess} disabled={processing}>
        {processing ? "Processing..." : "Start"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default App;
