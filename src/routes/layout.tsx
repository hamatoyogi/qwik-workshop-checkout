import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import {loader$} from "@builder.io/qwik-city";
import {getAuthenticationFromCookie} from "~/services/authenticationService";

export const userLoader = loader$(({ cookie }) => {
    return getAuthenticationFromCookie(cookie);
});

export default component$(() => {
  return (
    <>
      <main>
        <Header  />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
