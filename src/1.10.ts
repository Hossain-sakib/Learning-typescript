{
  // union types

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+ " | "B+" | "AB+";
  };

  const user1: User = {
    name: "sakib",
    email: "hossain.sakib.x@gmail.com",
    gender: "male",
    bloodGroup: "B+",
  };
}
