import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //stimulate api calls
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(`submitting the form`, data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          className={errors.firstname ? "error-field" : ""}
          {...register("firstname", {
            required: true,
            minLength: { value: 3, message: "Min at least 3" },
            maxLength: 6,
          })}
        />
        {errors.firstname && (
          <p className="err-msg">{errors.firstname.message}</p>
        )}
      </div>
      <br />

      <div>
        <label>Last Name</label>
        <input
          className={errors.lastname ? "error-field" : ""}
          {...register("lastname", {
            required: true,
            minLength: { value: 3, message: "Min atleast 3" },
            maxLength: { value: 6, message: "Max atmost 6" },
          })}
        />
        {errors.lastname && (
          <p className="err-msg">{errors.lastname.message}</p>
        )}
      </div>
      <br />

      <div>
        <label>Middle Name</label>
        <input
          {...register("middlename", {
            required: true,
            maxLength: { value: 6, message: "Max atmostt 6" },
            minLength: { value: 3, message: "Min atleast 3" },
          })}
        />
        {errors.middlename && (
          <p className="err-msg">{errors.middlename.message}</p>
        )}
      </div>
      <br />
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "submitting" : "Submit"}
      />
    </form>
  );
}

export default App;

/*
steps:
import useform, wuth registers, formState, ..
create basic form 
link input field with form using register  ie.{...register('text')}
handle onsubmit trigger using handlesubmit 
apply validation -- {required: true, minlength:3 , messsage}
handle errors {errors.message && ....}
apply styling on errors
prevent multiple submitting
*/
