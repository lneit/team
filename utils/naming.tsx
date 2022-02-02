import _ from 'lodash';

export const labelToAttr = (label: string) => _.camelCase(label);
