import { User } from "./models/User";
import { Product } from "./models/Product";
import { connectToDB } from "./db";
import {
  MdAddCircle,
  MdCircle,
  MdOutlinePerson,
  MdOutlineStarPurple500,
  MdVisibility,
} from "react-icons/md";

export const fetchUsers = async (q, page) => {
  // const regex = new RegExp(q, "i");

  // const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    //   const count = await User.find({ username: { $regex: regex } }).count();
    // const users = await User.find({ username: { $regex: regex } })
    const users = await User.find();
    //   .limit(ITEM_PER_PAGE)
    //   .skip(ITEM_PER_PAGE * (page - 1));
    // return { count, users };
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    icon: <MdVisibility />,
    title: "live Visits",
    text: 500,
    change: "Live",
    subiconposition: "before",
    subicon: <MdCircle size={10} />,
    border: "1px solid #0bdb23",
    bgcolor: " rgba(5, 193, 104, 0.2)",
    color: "#14CA74",
  },
  {
    id: 2,
    icon: <MdOutlinePerson />,
    title: "Monthly users",
    text: "3.6K",
    subiconposition: "after",
    subicon: <MdCircle size={10} />,
    change: "12.6%",
    border: "1px solid #FF5A65",
    bgcolor: " rgba(255, 90, 110, 0.2)",
    color: "#FF5A65",
  },
  {
    id: 3,
    icon: <MdAddCircle />,
    title: "New sign ups",
    text: "456",
    subiconposition: "after",
    subicon: <MdCircle size={10} />,
    change: "3.1%",
    border: "1px solid #FF5A65",
    bgcolor: " rgba(255, 90, 110, 0.2)",
    color: "#FF5A65",
  },
  {
    id: 3,
    icon: <MdOutlineStarPurple500 />,
    title: "Subscriptions",
    text: "2.3K",
    subiconposition: "after",
    subicon: <MdCircle size={10} />,
    change: "35.3%",
    border: "1px solid #FF5A65",
    bgcolor: " rgba(255, 90, 110, 0.2)",
    color: "#FF5A65",
  },
];
