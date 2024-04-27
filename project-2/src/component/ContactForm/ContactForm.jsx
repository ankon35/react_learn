import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";


const ContactForm = () => {

    const [name , setName] = useState("");
    const [email , setEmai] = useState("");

    const [text , setText] = useState ("");
   
    
    


    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);

        setName(event.target[0].value );
        
        setEmai(event.target[1].value);
        setText(event.target[2].value);
        
    }
  return (
    <section className={
        styles.container
    }>

        <div className={styles.contactForm}>
        <div className={styles.top_btn}>
        <Button

            icon = {<MdMessage  fontSize="24px"/>}
            text = "VIA SUPPORT CHAT"



        />


        <Button 
            
            icon = {<FaPhone  fontSize="24px"/>}
            text = "VIA CALL"

        />   

        </div> 

        <Button
            isOutline = {true}
            icon = {<MdEmail  fontSize="24px"/>}
            text = "VIA EMAIL"

        /> 


        <form  onSubmit={onSubmit}>
            <div className={styles.form_controller}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>    
            </div>
            <div className={styles.form_controller}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>    
            </div>
            <div className={styles.form_controller}>
                <label htmlFor="text">Text</label>
                <textarea name="text"  cols="30" rows="8"></textarea>   
            </div>


            <div style={
            {
                display: "flex",
                justifyContent: "end"
            }
        }>
        <Button 
           
            
           text = "Submit Button"

        />
        </div>


        <div>
            {name + "            \n" + email + "            \n" + text }
        </div>
        </form>

        
        </div>


        

        <div className={styles.contactImg}>
            <img src="" alt="" />
        </div>

    </section>
  )
}

export default ContactForm