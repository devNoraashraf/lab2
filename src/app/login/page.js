export default function Login() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <input className="border p-2 mt-4" type="text" placeholder="Username" />
      <br />
      <input className="border p-2 mt-2" type="password" placeholder="Password" />
      <br />
      <button className="bg-blue-900 text-white px-4 py-2 mt-4">Login</button>
    </div>
  );
}
