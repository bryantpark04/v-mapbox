import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import { VMap } from '@/src';

describe('<v-map />', () => {
  it('should render map component', () => {
    const wrapper = mount(VMap, {
      props: {
        options: {
          container: 'map-container',
          style: 'https://demotiles.maplibre.org/style.json',
          center: [73.8, 18.5],
          zoom: 4,
        },
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
