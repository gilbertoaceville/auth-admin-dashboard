import NavBar from "@/ui/nav-bar";
import SideBar from "@/ui/side-bar";

export default function Layout({ children }) {
  return (
    <article>
      <section>
        <SideBar />
      </section>
      <section>
        <NavBar />
        {children}
      </section>
    </article>
  );
}
