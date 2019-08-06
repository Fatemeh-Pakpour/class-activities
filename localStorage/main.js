const user = {
    name: "fafa",
    age:33
  };
  const  user_serialized = JSON.stringify(user);
  console.log(user_serialized);
  localStorage.setItem("user" , user_serialized );
  const user_deserialized = JSON.parse(localStorage.getItem("user"));
  console.log(user_deserialized);
  