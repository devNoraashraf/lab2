
export const metadata = {
  title: "About Us - My App",
  description: "Learn more about our company and team.",
  keywords: ["about", "company", "team", "mission"],
  openGraph: {
    title: "About Us - My App",
    description: "Learn more about our company and team.",
    type: "website",
    url: "/about",
  },
};

export default function About() {
  return <h1 className="text-center text-2xl font-bold">About Us</h1>;
}
