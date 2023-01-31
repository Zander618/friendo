import React, { useState, useContext} from 'react'
import { UserContext } from "./Context";
// import ImageViewer from 'react-simple-image-viewer';

const AddDog = () => {

  const {userId, dogs, setDogs} = useContext(UserContext)

  console.log(userId)

  const [formData, setFormData] = useState({
   user_id: userId,
   name: "",
   breed: "",
   traits: "",
   enjoyed_activities: "",
   age: "",
   image_data: "",
   vaccination: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/dogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        name: formData.name,
        breed: formData.breed,
        traits: formData.traits,
        enjoyed_activities: formData.enjoyed_activities,
        age: formData.age,
        image_data: "",
        vaccination: formData.vaccination,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        addUserDog(data)
      });
    setFormData({
        user_id: userId,
        name: "",
        breed: "",
        traits: "",
        enjoyed_activities: "",
        age: "",
        image_data: "",
        vaccination: ""
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const addUserDog = (dog) => {
    const newDogList = [ ...dogs, dog ];
    setDogs(newDogList);
  };


  return (
    <div>
      <h1>Add Dog</h1>
      <form onSubmit={handleSubmit}>
          <label style={{ color: "black" }}>
            Name:
            <input
              type="text"
              name="name"
              spellCheck="true"
              placeholder="Enter Dog's Name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label style={{ color: "black" }}>
            Breed:
            <input
              type="text"
              name="breed"
              spellCheck="true"
              placeholder="Enter Dog's Breed"
              value={formData.breed}
              onChange={handleChange}
            />
          </label>
          <label style={{ color: "black" }}>
            Traits:
            <input
              type="text"
              name="traits"
              spellCheck="true"
              placeholder="Enter Dog's Traits"
              value={formData.traits}
              onChange={handleChange}
            />
          </label>
          <label style={{ color: "black" }}>
            Enjoyed Activities:
            <input
              type="text"
              name="enjoyed_activities"
              spellCheck="true"
              placeholder="Enter Activities Your Dog Enjoys"
              value={formData.enjoyed_activities}
              onChange={handleChange}
            />
          </label>
          <label style={{ color: "black" }}>
            Age:
            <input
              type="text"
              name="age"
              spellCheck="true"
              placeholder="Enter You Dog's Age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label style={{ color: "black" }}>
            Vaccination:
            <input
              type="text"
              name="vaccination"
              spellCheck="true"
              placeholder="Enter Yes or No to your dog being vaccinated"
              value={formData.vaccination}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default AddDog