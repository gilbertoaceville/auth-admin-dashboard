const Page = async () => {
  const handleFormData = async (formData) => {
    "use server";
    
    console.log(formData)
  }

  return (
    <form action={handleFormData}>
      <input type="text" name="username" />
      <button role="submit">Submit</button>
    </form>
  );
};

export default Page;