import React from "react";
import "./ouracademy.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
const Ouracademy = () => {
  return (
    <div className="academys">
      <Navbar />
      <div className="form-container">
        <h2 className="guidelines-heading">Photos & Personal Information Guidelines</h2>
        <p className="guidelines-text">
          When submitting your photos, please keep the following in mind:
          <br />
          - <strong>Expressions:</strong> Maintain a neutral expression; avoid smiling to capture your most natural look.
          <br />
          - <strong>Posture:</strong> Relax, stand confidently, and let your authentic self shine.
          <br />
          - <strong>Clothing:</strong> Wear form-fitting attire that clearly shows your body shape.
          <br />
          - <strong>Accessories & Makeup:</strong> Keep it simple. Refrain from wearing makeup or large accessories (e.g., hoop earrings, bracelets) to ensure a clean, distraction-free image.
        </p>

        <form>
          {/* Existing form fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" id="phoneNumber" name="phoneNumber" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input type="text" id="postalCode" name="postalCode" />
            </div>
            <div className="form-group">
              <label htmlFor="instagram">Instagram</label>
              <input type="text" id="instagram" name="instagram" />
            </div>
          </div>

          {/* New image upload section */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="photos">Upload Photos</label>
              <input type="file" id="photos" name="photos" accept="image/*" multiple />
            </div>
          </div>
        </form>

        {/* New Measurement Form */}
        <div className="measurement-section">
          <h2 className="measurement-heading">Measurement</h2>
          <p className="measurement-subheading">
            Ensure your measurements are correctly aligned with our requirements (Male height: 6ft and above. Female height: 5'8" and above). Use a measuring tape for more accurate results.
          </p>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="height">Height (CM)</label>
                <input type="text" id="height" name="height" />
              </div>
              <div className="form-group">
                <label htmlFor="weight">Weight (KG)</label>
                <input type="text" id="weight" name="weight" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="chest">Chest (CM)</label>
                <input type="text" id="chest" name="chest" />
              </div>
              <div className="form-group">
                <label htmlFor="hip">Hip (CM)</label>
                <input type="text" id="hip" name="hip" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="shoulders">Shoulders (CM)</label>
                <input type="text" id="shoulders" name="shoulders" />
              </div>
              <div className="form-group">
                <label htmlFor="bust">Bust (CM)</label>
                <input type="text" id="bust" name="bust" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="waist">Waist (CM)</label>
                <input type="text" id="waist" name="waist" />
              </div>
              <div className="form-group">
                <label htmlFor="hairColor">Hair Color</label>
                <input type="text" id="hairColor" name="hairColor" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eyeColor">Eye Color</label>
                <input type="text" id="eyeColor" name="eyeColor" />
              </div>
              <div className="form-group">
                <label htmlFor="shoeSize">Shoe Size</label>
                <input type="text" id="shoeSize" name="shoeSize" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <button class="button-39" role="button">SUBMIT</button>
    <Footer/>
    </div>
  );
};

export default Ouracademy;
