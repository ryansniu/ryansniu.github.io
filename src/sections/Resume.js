import React, { useLayoutEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Document, Page, pdfjs } from 'react-pdf'
import './Resume.css'
import resume from '../assets/Ryan Niu - Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Resume = () => {
  const [width, height] = useWindowSize();
  var pdfWidth = Math.min(width - 50, 1024);
  return (
    <Container fluid className="resume" id="resume">
      <h1 style={{fontSize: "50px", color: "#96C9FD"}}>Resume</h1>
      <Row className="resume-pdf">
        <Document file={resume}>
          <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} width={pdfWidth}/>
        </Document>
      </Row>
      <text>Feel free to download my resume <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.</text>
    </Container>
  );
}



export default Resume