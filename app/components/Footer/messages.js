/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'boilerplate.components.Footer.license.message',
    defaultMessage: 'AMITY Copyright 2017 Borderless Charity, Inc 501(c)3.',
  },
  authorMessage: {
    id: 'boilerplate.components.Footer.author.message',
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
