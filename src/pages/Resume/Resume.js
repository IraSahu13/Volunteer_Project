import React from 'react';
import { Footer } from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import PageHeader from '../../components/layout/PageHeader';
import Profile from './Education';
function Resume() {
  return (
     <>
       <Header />
       <PageHeader
            title="Resume"
            breadcrumb="resume"
        />
        <div>
          {/* <Profile /> */}
        </div>
        <Footer />
     </>
  );
}

export default Resume;
