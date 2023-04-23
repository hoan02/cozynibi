import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  Checkbox,
} from "@mui/material";

import noImg from "../../assets/images/no-img.jpg";

const initialValues = {
  name: "",
  notes: "",
  descriptions: "",
  area: "",
  high: "",
  bedSize: "",
  price: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter room name!"),
  notes: Yup.string().required("Please add notes!"),
  descriptions: Yup.string(),
  area: Yup.number()
    .required("Please enter room area!")
    .positive("Room area must be a positive number!"),
  high: Yup.number()
    .required("Please enter room height!")
    .positive("Room height must be a positive number!"),
  bedSize: Yup.string().required("Please choose bed size!"),
  price: Yup.number().required("Please enter price!").positive(),
});

const listEquipment = [
  "Work desk",
  "Tea-coffee",
  "Hair dryer",
  "Room service (surcharge)",
  "Free Buffet breakfast",
  "Security 24h",
  "Room phone",
  "Swimming pool",
  "Cable TV",
  "Kettle",
  "Minibar",
  "Cupboard clothes",
  "Modern bathroom equipment",
  "Free wifi - internet access",
];

const Room = () => {
  const [formData, setFormData] = useState({});
  const [imgPreview, setImgPreview] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const handleChangeEquipment = (event) => {
    const value = event.target.value;
    if (selectedEquipment.includes(value)) {
      setSelectedEquipment(
        selectedEquipment.filter((equipment) => equipment !== value)
      );
    } else {
      setSelectedEquipment([...selectedEquipment, value]);
    }
  };

  console.log(selectedEquipment);

  const handleImageChange = (event, index) => {
    const selectedImage = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = () => {
      setImgPreview((prevUrls) => {
        const updatedUrls = [...prevUrls];
        updatedUrls[index] = reader.result;
        return updatedUrls;
      });
    };
  };

  const handleSubmit = (values) => {
    // submit form
    setFormData({ ...formData, ...values });
    console.log(formData);
  };

  return (
    <div>
      <Box sx={{ maxWidth: "800px", margin: "auto" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                label="Name Room"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: "16px" }}
              />
              <Field
                as={TextField}
                name="notes"
                label="Notes"
                fullWidth
                multiline
                error={touched.notes && Boolean(errors.notes)}
                helperText={touched.notes && errors.notes}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: "16px" }}
              />
              <Field
                as={TextField}
                name="descriptions"
                label="Descriptions"
                fullWidth
                multiline
                minRows={3}
                error={touched.descriptions && Boolean(errors.descriptions)}
                helperText={touched.descriptions && errors.descriptions}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: "16px" }}
              />
              <Field
                as={TextField}
                name="area"
                label="Area (m2)"
                fullWidth
                type="number"
                error={touched.area && Boolean(errors.area)}
                helperText={touched.area && errors.area}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: "16px" }}
              />
              <Field
                as={TextField}
                name="high"
                label="High (m)"
                fullWidth
                type="number"
                step={0.1}
                error={touched.high && Boolean(errors.high)}
                helperText={touched.high && errors.high}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: "16px" }}
              />
              <FormControl fullWidth>
                <InputLabel id="">BedSize (w*h)</InputLabel>
                <Field
                  as={Select}
                  name="bedSize"
                  label="BedSize (w*h)"
                  fullWidth
                  error={touched.bedSize && Boolean(errors.bedSize)}
                  helperText={touched.bedSize && errors.bedSize}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ marginBottom: "16px" }}
                >
                  <MenuItem value="1.8*2.0">1.8*2.0</MenuItem>
                  <MenuItem value="2.0*2.2">2.0*2.2</MenuItem>
                  <MenuItem value="2.0*3.0">2.0*3.0</MenuItem>
                </Field>
              </FormControl>

              <Field
                as={TextField}
                name="price"
                label="Price (vnd)"
                fullWidth
                type="number"
                error={touched.price && Boolean(errors.price)}
                helperText={touched.price && errors.price}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: "16px" }}
              />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {[0, 1, 2].map((index) => (
                  <Box key={index} fullWidth>
                    <Box
                      sx={{
                        width: "100%",
                        border: "1px solid gray",
                        borderRadius: "4px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <img
                        src={imgPreview[index] || noImg}
                        alt={`preview-${index}`}
                        style={{
                          width: "250px",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      component="label"
                      fullWidth
                      style={{ marginBottom: "16px" }}
                    >
                      Chose Image
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(event) => handleImageChange(event, index)}
                      />
                    </Button>
                    {errors.images && touched.images && (
                      <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.images}
                      </div>
                    )}
                  </Box>
                ))}
              </Box>

              <FormControl
                component="fieldset"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <FormLabel component="legend">Equipment</FormLabel>
                {listEquipment.map((equipment) => (
                  <FormControlLabel
                    key={equipment}
                    control={<Checkbox onChange={handleChangeEquipment} />}
                    label={equipment}
                    value={equipment}
                  />
                ))}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "16px" }}
              >
                Create New Room
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Room;
