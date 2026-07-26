{
  //spread operator
  const bros1: string[] = ["lulu", "mulu", "vulu"];
  const bros2: string[] = ["hulu", "nulu", "tulu"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "sakib",
    redux: "rakib",
    dbms: "akib",
  };
  const mentors2 = {
    prisma: "sakib1",
    next: "rakib1",
    cloud: "akib1",
  };

  const mentorlist = {
    ...mentors1,
    ...mentors2,
  };

  //rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi ${friend}`));
  };
  greetFriends("abul", "babul", "kabul");
  //destructuring
}
