import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import {loader$} from "@builder.io/qwik-city";
import {getAuthenticationFromCookie} from "~/services/authenticationService";

export const userLoader = loader$(({ cookie }) => {
    return getAuthenticationFromCookie(cookie);
});

export default component$(() => {
    const userSignal = userLoader.use();
  return (
    <>
      <main>
        <Header loggedIn={userSignal.value !== undefined} />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
