import { test } from 'tap';
import { createApp } from '../helper';

test('about route', async (t) => {
  const app = await createApp(t);

  const res = await app.inject({
    url: '/about',
  });
  t.same(JSON.parse(res.payload), {
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
  });
});
