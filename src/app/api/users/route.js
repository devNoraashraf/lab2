import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
  }
}


export async function POST(req) {
  await connectDB();
  try {
    const { name, email, phone } = await req.json();
    if (!name || !email || !phone) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    const newUser = new User({ name, email, phone });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
}
