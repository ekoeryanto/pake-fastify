import { test } from 'tap';
import { createApp } from '../helper';

test('default root route', async (t) => {
  const app = await createApp(t);

  const res = await app.inject({
    url: '/',
  });
  t.same(JSON.parse(res.payload), { root: true });
});
