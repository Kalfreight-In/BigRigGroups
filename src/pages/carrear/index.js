import React, { useState, useEffect,} from 'react';
import PdfFinanceAndLeasingAssistant from '../../documents/FinanceAndLeasingAssistant.pdf';  
import PdfHRAssistant from '../../documents/HRAssistant_1.pdf'; 
import PdfFrontCounterSales from '../../documents/FrontCounterRepresentative_1.pdf'
import PdfInsideTire from '../../documents/InsideTireSalesRepresentative_1.pdf'; 
import PdfOutsideTire from '../../documents/Outside Tire Sales.pdf'; 
import PdfPartsCounter from '../../documents/PartsCounterSales_1.pdf'; 
import PdfPartsOutside from '../../documents/PartsOutsideSalesRep_1.pdf'; 
import PdfPartsInside from '../../documents/PartsInsideSalesRep_1.pdf'
import PdfSafetyAndCompliance from '../../documents/Safety and compliance coordinator.pdf'; 
import PdfServiceTruck from '../../documents/ServiceTruckTireTechnician_1.pdf';
import PdfTireSales from '../../documents/TireSalesManager_1.pdf';
import PdfTireTech from '../../documents/TireTechnician_1.pdf';
import PdfTitleSpec from '../../documents/Title Specialist.pdf';
import PdfAfterHr from '../../documents/PartsAfterHoursSalesRep_1.pdf';
import emailjs from 'emailjs-com';



export const Career = () => {
  console.log('careers');

  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('');
  const [desiredPosition, setDesiredPosition] = useState(''); 
  const [resume, setResume] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');


  useEffect(() => {
    if (showForm) {
      // Scroll to the top of the page when the form is shown
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  }, [showForm]);

  const jobList = [
    'Financing – Leasing Administrator',
    'HR Assistant',
    'Title Specialist',
    'Safety and Compliance',
    'Inside Part Sales Representative',
    'Outside Part Sales Representative',
    'Front Counter Representative',
    'Parts Counter Sales',
    'After Hrs. Counter Representative',
    'Tires Sales Manager',
    'Tire Technician',
    'Inside Tire Sales Representative',
    'Outside Tire Sales Representative',
    'Service Truck Tire Technician',
    'Other'
  ];

  const jobDescriptions = {
    'Financing – Leasing Administrator': PdfFinanceAndLeasingAssistant,
    'Safety and Compliance': PdfSafetyAndCompliance,
    'Inside Part Sales Representative':PdfPartsInside,
    'Outside Part Sales Representative':PdfPartsOutside,
    'Front Counter Representative': PdfFrontCounterSales,
    'Parts Counter Sales':PdfPartsCounter,
    'HR Assistant': PdfHRAssistant,
    'Title Specialist': PdfTitleSpec,
    'Tires Sales Manager':PdfTireSales,
    'Tire Technician':PdfTireTech,
    'Inside Tire Sales Representative':PdfInsideTire,
    'Outside Tire Sales Representative':PdfOutsideTire,
    'Service Truck Tire Technician':PdfServiceTruck,
    'After Hrs. Counter Representative':PdfAfterHr,

   
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    // setShowForm(true); // Show the form when a location is selected
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
    // Reset the desiredPosition field when changing job positions
    setDesiredPosition('');
  };

  const handleDesiredPositionChange = (e) => {
    setDesiredPosition(e.target.value);
  };

  const handleResumeChange = (e) => {
    // file upload here, e.target.files[0] contains the selected file
    const selectedResume = e.target.files[0];
    console.log(selectedResume);
    setResume(selectedResume);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleApplyNowClick = (job) => {
    setSelectedJob(job);
    setPosition(job);
    setShowForm(true);

  };

  const handleViewDetailsClick = (job) => {
    setSelectedJob(job);
    const pdfUrl = jobDescriptions[job];
  if (pdfUrl) {
    window.open(pdfUrl, '_blank');
  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const serviceID = 'service_t6296ff';
    const templateID = 'template_jrr1t0x';
    const Key = '-dyAfc-p3AqujoCxl';
  
    // Create a new FormData object to handle file uploads
  
  
    try {
      // Send the email with the formData
      await emailjs.sendForm(serviceID, templateID,e.target,Key);
      alert('Email sent successfully!');
    } catch (error) {
      alert('Error sending the email. Please try again later.');
      console.error(error);
    }
  
  
    // Reset the form fields
    setLocation('');
    setPosition('');
    setDesiredPosition('');
    setResume(null);
    setName('');
    setEmail('');
    setPhone('');
    setShowForm(false); // Hide form after submission
    setSelectedJob('');
  };

  return (
    
    <div className="mt-28">
      {/* Location Selection */}


      {!showForm && selectedJob && jobDescriptions[selectedJob] && (
        <div>
          {/* Render the PDF download link */}
          <a href={jobDescriptions[selectedJob]} target="_blank" rel="noopener noreferrer"></a>
        </div>
      )}

      {!showForm && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobList.map((job, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{job}</div>
                {/* details or descriptions here */}
              </div>
              <div className="mpx-6 py-4">
                {<button
                    type="button"
                    className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-400 ml-2 mr-2"
                    onClick={() => handleApplyNowClick(job)}
                  >
                    Apply Now
                  </button>}
                {job !== 'Other' && <button
                    type="button"
                    className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-400"
                    onClick={() => handleViewDetailsClick(job)}
                  >
                    View Details
                  </button>}
              </div>
            </div>
          ))}
        </div>
      )}
    


      {showForm && (
        <form onSubmit={handleSubmit}>
           <div className="md:w-1/2 lg:w-1/3 ml-2 mb-4">
        <label htmlFor="location" className="block font-semibold mb-2">
          Select Location:
        </label>
        <select
          id="location"
          name='location'
          value={location}
          onChange={handleLocationChange}
          className="w-auto py-2 px-4 border rounded-lg bg-gray-100"
          required
        >
          <option value="">Select Location</option>
          {/* location options*/}
          <option value="Abbotsford">Abbotsford</option>
          <option value="Brampton">Brampton</option>
          <option value="Calgary">Calgary</option>
          <option value="Edmonton">Edmonton</option>
        </select>
      </div>
          {/* Position Selection */}
          <div className="md:w-1/2 lg:w-1/3 ml-2 mb-4">
            <label htmlFor="position" className="block font-semibold mb-2">
              Select Position:
            </label>
            <select
              id="position"
              name='position'
              value={position}
              onChange={handlePositionChange}
              className="w-full py-2 px-4 border rounded-lg bg-gray-100"
              required
            >
              <option value="">Select Position</option>
              {/* position options here */}
              <option value="Financing – Leasing Administrator">Financing – Leasing Administrator</option>
              <option value="HR Assistant">HR Assistant</option>
              <option value="Title Specialist">Title Specialist</option>
              <option value="Safety and Compliance">Safety and Compliance</option>
              <option value="Inside Part Sales Representative">Inside Part Sales Representative</option>
              <option value="Outside Part Sales Representative">Outside Part Sales Representative</option>
              <option value="Front Counter Representative">Front Counter Representative</option>
              <option value="After Hrs. Counter Representative">After Hrs. Counter Representative</option>
              <option value="Tires Sales Manager">Tires Sales Manager</option>
              <option value="Tire Technician">Tire Technician</option>
              <option value="Inside Tire Sales Representative">Inside Tire Sales Representative</option>
              <option value="Outside Tire Sales Representative">Outside Tire Sales Representative</option>
              <option value="Service Truck Tire Technician">Service Truck Tire Technician</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Desired Position */}
          {position === 'Other' && (
            <div className="md:w-1/2 lg:w-1/3 ml-2 mb-4">
              <label htmlFor="desiredPosition" className="block font-semibold mb-2">
                Desired Position:
              </label>
              <input
                type="text"
                id="desiredPosition"
                name='desiredPosition'
                value={desiredPosition}
                onChange={handleDesiredPositionChange}
                className="w-auto py-2 px-4 border rounded-lg bg-gray-100"
                required
              />
            </div>
          )}

          {/* Resume Upload */}
          <div className="md:w-1/2 lg:w-1/3 ml-2 mb-4">
            <label htmlFor="resume" className="block font-semibold mb-2">
              Upload your CV/Resume:
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf"
              name='resume'
              onChange={handleResumeChange}
              className="w-auto py-2 px-4 border rounded-lg bg-gray-100"
              required
            />
          </div>

          {/* Name */}
          <div className="md:w-1/2 lg:w-1/3 ml-2 mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name='name'
              value={name}
              onChange={handleNameChange}
              className="w-auto py-2 px-4 border rounded-lg bg-gray-100"
              required
            />
          </div>

          {/* Email */}
          <div className="md:w-1/2 lg:w-1/3 ml-2 mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name='email'
              value={email}
              onChange={handleEmailChange}
              className="w-auto py-2 px-4 border rounded-lg bg-gray-100"
              required
            />
          </div>

          {/* Phone */}
          <div className="md:w-1/2 lg:w-1/3 ml-2 mb-4">
            <label htmlFor="phone" className="block font-semibold mb-2">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name='phone'
              value={phone}
              onChange={handlePhoneChange}
              className="w-auto py-2 px-4 border rounded-lg bg-gray-100"
              required
            />
          </div>

          {/* Submit Button */}
          <div className='md:w-1/2 lg:w-1/3 mb-2 text-center'>
            <button type="submit" className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Career;
