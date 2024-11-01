export const register = async (req, res)=>{
    try {
        const name = "Varav";
        const email = "varav@gmail.com";
        const password = "12345";
        const user = new User({
            name,
            email,
            password,
          });
          await user.save();
          res.send("User created successfully");
    }catch (error) {
        console.log(error);
        res.send("Something went wrong");
      }
}