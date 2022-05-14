import { test } from 'tap';
import { createApp } from '../helper';

test('example is loaded', async (t) => {
  const app = await createApp(t);

  const res = await app.inject({
    url: '/example',
  });

  t.equal(res.payload, 'this is an example');
});
