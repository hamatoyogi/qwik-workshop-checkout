import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";
import { logout } from "~/services/authenticationService";
import { ActionLink } from "../actionLink/action-link";

interface HeaderProps {
  loggedIn: boolean;
}

export default component$(({ loggedIn } : HeaderProps) => {
  useStylesScoped$(styles);
  const logoutAction = logout.use();

  return (
    <header>
      <div class="logo">
        <a href="/" title="Lightsabers Inc.">
          Lightsabers Inc.
        </a>
      </div>
      <ul>
        <li>
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
          >
            Tutorials
          </a>
        </li>
        {loggedIn && <li>
          <ActionLink action={logoutAction}>Logout</ActionLink>
        </li>}
      </ul>
    </header>
  );
});
