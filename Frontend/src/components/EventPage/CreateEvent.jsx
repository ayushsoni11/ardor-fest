import React, { useState } from 'react';
import './CreateEvent.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: '',
    desc: '',
    date: '',
    venue: '',
    category: '',
    image: ''
  });

    const navigate=useNavigate();
  const [errors, setErrors] = useState({});
  const defaultImage = 'https://via.placeholder.com/300x200.png?text=Event+Poster';
 const [success, setSuccess] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.desc.trim()) newErrors.desc = 'Description is required';
    if (!form.date.trim()) newErrors.date = 'Date is required';
    if (!form.venue.trim()) newErrors.venue = 'Venue is required';
    if (!form.category.trim()) newErrors.category = 'Category is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    const eventData = {
        ...form,
        image: form.image.trim() ? form.image : defaultImage,
    };


    try {
        const res = await axios.post("http://localhost:5000/api/events/create-event", eventData, {
            withCredentials : true,
            
        });
        
        if(res.data.success) {
            setSuccess('Event created successfully!');
            navigate('/events');
        } else {
            setSuccess('');
            alert(res.message || 'error in creating event');
        }
      
      setForm({
        title: '',
        desc: '',
        date: '',
        venue: '',
        category: '',
        image: ''
      });
      setErrors({});
    } catch (error) {
      setSuccess('');
      alert(error?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="create-event-wrapper">
      <form className="create-event-form" onSubmit={handleSubmit}>
        <h2>Create New Event</h2>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter event title"
        />
        {errors.title && <span className="error">{errors.title}</span>}

        <label>Description</label>
        <textarea
          name="desc"
          value={form.desc}
          onChange={handleChange}
          placeholder="Enter description"
        />
        {errors.desc && <span className="error">{errors.desc}</span>}

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}

        <label>Venue</label>
        <input
          type="text"
          name="venue"
          value={form.venue}
          onChange={handleChange}
          placeholder="Event location"
        />
        {errors.venue && <span className="error">{errors.venue}</span>}

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="e.g., Drama, Tech, Dance"
        />
        {errors.category && <span className="error">{errors.category}</span>}

        <label>Image URL (optional)</label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Enter image URL or leave blank"
        />

        <button type="submit" onSubmit={handleSubmit}>Create Event</button>
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default CreateEvent;


