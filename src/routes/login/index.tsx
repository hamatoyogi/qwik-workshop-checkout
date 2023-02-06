import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Form, useLocation } from '@builder.io/qwik-city';
import indexCSS from './index.css?inline';
import { login } from '~/services/authenticationService';

export default component$(() => {
  const loginAction = login.use();
  const location = useLocation();
  useStylesScoped$(indexCSS);

  return (
    <Form action={loginAction}>
      <div class="container">
        <input
          type="hidden"
          name="redirectUrl"
          value={location.query.get('redirectUrl') || '/'}
        />
        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <label for="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <div class="login">
          <button type="submit">Login</button>
        </div>
        {loginAction.isRunning && <div>loading...</div>}
      </div>
    </Form>
  );
});
