const { useState } = React;

export function EventRSVPForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [att, setAtt] = useState(null);
  const [dietPref, setDietPref] = useState('');
  const [addGuests, setAddGuests] = useState(false);
  const [submitMess, setSubmitMess] = useState(null);

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handleAttChange = e => {
    setAtt(e.target.value);
  }

  const handleDietPrefChange = e => {
    setDietPref(e.target.value);
  }

  const handleAddGuestsChange = e => setAddGuests(!addGuests);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitMess(
      <div className='submitted-message'>
        <h3>RSVP Submitted!</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Number of attendees: {att}</p>
        <p>Dietary preferences: {dietPref ? dietPref : 'None'}</p>
        <p>Bringing additional guests: {addGuests ? 'Yes' : 'No'}</p>
      </div>
    );
  };

  return (
    <div className='form-container'>
      <h2>Event RSVP Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' required placeholder='Your Name' value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type='email' required placeholder='Your Email' value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Number of Attendees:
          <input type='number' required min='1' placeholder='Number of Attendees' value={att} onChange={handleAttChange}/>
        </label>
        <label>
          Dietary Preferences:
          <input type='text' placeholder='Dietary Preferences (Optional)' value={dietPref} onChange={handleDietPrefChange} />
        </label>
        <label>
          Bringing additional guests? <input type='checkbox' checked={addGuests} onChange={handleAddGuestsChange} />
        </label>
        <button className='submit' type='submit'>Submit RSVP</button>
      </form>
      {submitMess}
    </div>
  );
}