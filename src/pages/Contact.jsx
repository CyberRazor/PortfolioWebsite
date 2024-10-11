import React, { useState } from 'react';
import SeparatorBody from '../components/SeparatorBody';
import DateCalculator from '../components/DateCalculator';
import hoverSoundFile from '../sounds/Ui_digihover_01.mp3';
import clickSoundFile from '../sounds/UI_ClickBeep.mp3';
import errorSoundFile from '../sounds/ui_navclick_01.mp3';

export default function Contact() {


        const playSound = (soundUrl, volume = 1.0) => {
          const audio = new Audio(soundUrl);
          audio.volume = volume;
          audio.play();}

    // Define state for form data and errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        studio: '',
        startDate: '',
        endDate: '',
        workload: {
            soundDesign: false,
            technicalSoundDesign: false,
            implementation: false,
            dialogueEditing: false,
            frontend: false,
            datasci: false
        }
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false); // Track modal visibility

    // Handle form field changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle checkbox changes for workload
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            workload: {
                ...prevData.workload,
                [id]: checked
            }
        }));
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.startDate) newErrors.startDate = 'Start date is required';
        if (!formData.endDate) newErrors.endDate = 'End date is required';
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        const validationErrors = validate(); // Validate form

        // If no errors, set the success state
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form Data:', formData); // Send form data somewhere or process it
            setIsSubmitted(true); // Mark as submitted
            setErrors({}); // Clear any previous errors
            setShowModal(true); // Show the modal on successful submission
        } else {
            setErrors(validationErrors); // Display validation errors
            setIsSubmitted(false); // Do not show success message if errors exist
            playSound(errorSoundFile, 0.3); // Play error sound
        }
    };

    // Close modal handler
    const closeModal = () => {
        setShowModal(false); // Hide the modal
        setFormData({
            name: '',
            email: '',
            phone: '',
            studio: '',
            startDate: '',
            endDate: '',
            workload: {
                soundDesign: false,
                technicalSoundDesign: false,
                implementation: false,
                dialogueEditing: false,
                frontend: false,
                datasci: false
            }
        });
    };

    return (
        <div className='w-50dvw justify-center'>
            <h1 className='text-gray font-bold text-7xl mt-12 mb-6'>ENQUIRE</h1>
            <SeparatorBody className='flex justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green' />

            <p className='text-gray text-lg justify-center mx-20 my-12 p-2'>
                If you would like to get an estimate for my assistance on your project, or discuss your needs further please use the form below.
            </p>

            <SeparatorBody className='flex justify-center mx-auto h-1 w-3/4 bg-gradient-to-r from-black to-green' />
            <div className='mx-48 flex items-center justify-center min-h-screen'>
                <form className='flex flex-col p-16 items-start border-2 text-black rounded-md shadow-xl bg-gradient-to-r from-black/15 to-green/15' onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <div className='inline-block w-full'>
                        <label htmlFor='name' className="block text-left ">Name: </label>
                        {errors.name && <p className='inline justify-center text-red'>{errors.name}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm my-2 w-full mx-15 ${errors.name && 'border-red'}`}
                        type='text'
                        id='name'
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='email' className="block text-left">Email: </label>
                        {errors.email && <p className='inline justify-center text-red'>{errors.email}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm w-full my-2  mx-15 ${errors.email && 'border-red'}`}
                        type='email'
                        id='email'
                        placeholder='Email address'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='phone' className="block text-left">Phone: </label>
                        {errors.phone && <p className='inline justify-center text-red'>{errors.phone}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm my-2 w-full mx-15 ${errors.phone && 'border-red'}`}
                        type='tel'
                        id='phone'
                        placeholder='Phone number'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='studio' className="block text-left">Company: </label>
                        {errors.studio && <p className='inline justify-center text-red'>{errors.studio}</p>} {/* Error message */}
                    </div>
                    <input
                        className='border-2 border-gray text-black rounded-sm my-2 w-full mx-15'
                        type='text'
                        id='studio'
                        placeholder='Studio or Developer'
                        value={formData.studio}
                        onChange={handleChange}
                    />
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='startDate' className="block text-left">Start date: </label>
                        {errors.startDate && <p className='inline justify-center text-red'>{errors.startDate}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm my-2 w-full mx-15 ${errors.startDate && 'border-red'}`}
                        type='date'
                        id='startDate'
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='endDate' className="block text-left">End date: </label>
                        {errors.endDate && <p className='inline justify-center text-red'>{errors.endDate}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm my-2 w-full mx-15 ${errors.endDate && 'border-red'}`}
                        type='date'
                        id='endDate'
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                    {/* Workload checkboxes */}
                    <div className='grid grid-cols-1 workload w-full m-4'>
                      <label className='justify-start m-4 gap-x-10 gap-y-4'><span className='font-semibold block text-left '>Type of work:</span> </label>
                      <br></br>
                       {/* Audio Section */}
                    <div className='grid grid-cols-1 w-full'>
                      <label className='justify-start mx-4 mt-4 gap-x-10 gap-y-4'><span className='font-semibold underline block text-left '>Audio</span> </label>
                      <div className='grid grid-cols-2 gap-5 mx-4 p-4 border-2 rounded-md'>
                            <div className="flex items-center">
                              <input type='checkbox' id='soundDesign' checked={formData.workload.soundDesign} onChange={handleCheckboxChange} />
                              <label htmlFor='soundDesign' className='mx-2'> Sound Design</label>
                            </div>                       
                            <div className="flex items-center">
                              <input type='checkbox' id='technicalSoundDesign' checked={formData.workload.technicalSoundDesign} onChange={handleCheckboxChange} />
                              <label htmlFor='technicalSoundDesign' className='mx-2'> Technical Sound Design</label>
                            </div>
                            <div className="flex items-center">
                              <input type='checkbox' id='implementation' checked={formData.workload.implementation} onChange={handleCheckboxChange} />
                              <label htmlFor='implementation' className='mx-2'> Engine implementation</label>
                            </div>
                            <div className="flex items-center">
                              <input type='checkbox' id='dialogueEditing' checked={formData.workload.dialogueEditing} onChange={handleCheckboxChange} />
                              <label htmlFor='dialogueEditing' className='mx-2'> Dialogue Editing</label>
                     </div>
                     </div>
                    <div>
                      <label className='justify-start mx-4 mt-4 gap-x-10 gap-y-4'><span className='font-semibold underline block text-left '>Developer</span> </label>
                      <div className='grid grid-cols-2 gap-5 mx-4 p-4 border-2 rounded-md'>
                          <div className="flex items-center">
                           <input type='checkbox' id='frontend' checked={formData.workload.frontend} onChange={handleCheckboxChange} />
                           <label htmlFor='frontend' className='mx-2'> Front End Development</label>
                          </div>
                          <div className="flex items-center">
                           <input type='checkbox' id='datasci' checked={formData.workload.datasci} onChange={handleCheckboxChange} />
                           <label htmlFor='datasci' className='mx-2'> Data Science</label>
                          </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    <br />
                    <input
                        type='submit'
                        className='mx-auto my-8 p-4 border-2 text-black rounded-lg bg-gradient-to-t from-gray/45 to-white shadow-xl' onMouseEnter={() => playSound(hoverSoundFile, 0.05)} onClick={() => playSound(clickSoundFile, 0.3)}
                    />
                </form>
                {/* Success message */}
                {showModal && (
                    <div className='fixed inset-0 w-full bg-gray bg-opacity-75 flex m-auto justify-center items-center'>
                        <div className='bg-white p-16 rounded shadow-lg'>
                            <h2 className='text-2xl font-bold mb-4'>Thank you for your interest!</h2>
                            <p>Your form has been successfully submitted. Please find below an estimated cost for my services.</p>
                            <p>A detailed copy of this quote will be sent to the email address provided above.</p>
                            <br></br>
                            <DateCalculator startDate={formData.startDate} endDate={formData.endDate} workload={formData.workload} />
                            <br></br>
                            <button className='mt-4 p-2 bg-green text-white rounded' onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
