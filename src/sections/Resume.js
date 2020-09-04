import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Document, Page, pdfjs } from 'react-pdf'
import './Resume.css'

class Resume extends React.Component {
  constructor(){
    super();
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }
  
  render(){
    var pdfWidth = Math.min(this.props.width - 50, 1080);
    
    return(
      <Container fluid className="resume" id="resume">
        <h1>Resume</h1>
        <h5>My skills, experience, and portfolio on a single page.</h5>
        <Row className="resume-pdf">
          <Document file={'/resume.pdf'}>
            <Page pageNumber={1} renderAnnotationLayer={false} width={pdfWidth} />
          </Document>
        </Row>
        <text>Feel free to download my resume <a href={'/resume.pdf'} target="_blank">here</a>.</text>
      </Container>
    );
  }
}

export default Resume