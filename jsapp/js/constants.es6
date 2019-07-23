/**
 * A list of all shareable constants for the application.
 */

import {t} from './utils';

const HOOK_LOG_STATUSES = {
  SUCCESS: 2,
  PENDING: 1,
  FAILED: 0
};

const MODAL_TYPES = {
  SHARING: 'sharing',
  UPLOADING_XLS: 'uploading-xls',
  NEW_FORM: 'new-form',
  LIBRARY_NEW_ITEM: 'library-new-item',
  LIBRARY_TEMPLATE: 'library-template',
  LIBRARY_COLLECTION: 'library-collection',
  LIBRARY_UPLOAD: 'library-upload',
  ENKETO_PREVIEW: 'enketo-preview',
  SUBMISSION: 'submission',
  REPLACE_PROJECT: 'replace-project',
  TABLE_COLUMNS: 'table-columns',
  REST_SERVICES: 'rest-services',
  FORM_LANGUAGES: 'form-languages',
  FORM_TRANSLATIONS_TABLE: 'form-translation-table'
};

const PROJECT_SETTINGS_CONTEXTS = {
  NEW: 'newForm',
  EXISTING: 'existingForm',
  REPLACE: 'replaceProject',
  BUILDER: 'formBuilderAside'
};

const update_states = {
  UNSAVED_CHANGES: -1,
  UP_TO_DATE: true,
  PENDING_UPDATE: false,
  SAVE_FAILED: 'SAVE_FAILED',
};

const AVAILABLE_FORM_STYLES = [
  {value: '', label: t('Default - single page')},
  {value: 'theme-grid no-text-transform', label: t('Grid theme')},
  {value: 'theme-grid', label: t('Grid theme with headings in ALL CAPS')},
  {value: 'pages', label: t('Multiple pages')},
  {value: 'theme-grid pages no-text-transform', label: t('Grid theme + Multiple pages')},
  {value: 'theme-grid pages', label: t('Grid theme + Multiple pages + headings in ALL CAPS')},
];

const VALIDATION_STATUSES = {
  no_status: {
    value: null,
    label: '—'
  },
  validation_status_not_approved: {
    value: 'validation_status_not_approved',
    label: t('Not Approved')
  },
  validation_status_approved: {
    value: 'validation_status_approved',
    label: t('Approved')
  },
  validation_status_on_hold: {
    value: 'validation_status_on_hold',
    label: t('On Hold')
  },
};

const VALIDATION_STATUSES_LIST = [
  VALIDATION_STATUSES.no_status,
  VALIDATION_STATUSES.validation_status_not_approved,
  VALIDATION_STATUSES.validation_status_approved,
  VALIDATION_STATUSES.validation_status_on_hold
];

const ASSET_TYPES = {
  question: {
    id: 'question',
    label: t('question')
  },
  block: {
    id: 'block',
    label: t('block')
  },
  template: {
    id: 'template',
    label: t('template')
  },
  survey: {
    id: 'survey',
    label: t('project')
  },
  collection: {
    id: 'collection',
    label: t('collection')
  }
};

const QUESTION_TYPES = new Map([
  [
    'select_one',
    {
      label: t('Select One'),
      faIcon: 'fa-dot-circle-o',
      id: 'select_one'
    }
  ],
  [
    'select_multiple',
    {
      label: t('Select Many'),
      faIcon: 'fa-list-ul',
      id: 'select_multiple'
    }
  ],
  [
    'text',
    {
      label: t('Text'),
      faIcon: 'fa-lato-text',
      id: 'text'
    }
  ],
  [
    'integer',
    {
      label: t('Number'),
      faIcon: 'fa-lato-integer',
      id: 'integer'
    }
  ],
  [
    'decimal',
    {
      label: t('Decimal'),
      faIcon: 'fa-lato-decimal',
      id: 'decimal'
    }
  ],
  [
    'date',
    {
      label: t('Date'),
      faIcon: 'fa-calendar',
      id: 'date'
    }
  ],
  [
    'time',
    {
      label: t('Time'),
      faIcon: 'fa-clock-o',
      id: 'time'
    }
  ],
  [
    'datetime',
    {
      label: t('Date & time'),
      faIcon: 'fa-calendar clock-over',
      id: 'datetime'
    }
  ],
  [
    'geopoint',
    {
      label: t('Point'),
      faIcon: 'fa-map-marker',
      id: 'geopoint'
    }
  ],
  [
    'image',
    {
      label: t('Photo'),
      faIcon: 'fa-picture-o',
      id: 'image'
    }
  ],
  [
    'audio',
    {
      label: t('Audio'),
      faIcon: 'fa-volume-up',
      id: 'audio'
    }
  ],
  [
    'video',
    {
      label: t('Video'),
      faIcon: 'fa-video-camera',
      id: 'video'
    }
  ],
  [
    'geotrace',
    {
      label: t('Line'),
      faIcon: 'fa-share-alt',
      id: 'geotrace'
    }
  ],
  [
    'note',
    {
      label: t('Note'),
      faIcon: 'fa-bars',
      id: 'note'
    }
  ],
  [
    'barcode',
    {
      label: t('Barcode / QR Code'),
      faIcon: 'fa-qrcode',
      id: 'barcode'
    }
  ],
  [
    'acknowledge',
    {
      label: t('Acknowledge'),
      faIcon: 'fa-check-square-o',
      id: 'acknowledge'
    }
  ],
  [
    'geoshape',
    {
      label: t('Area'),
      faIcon: 'fa-square',
      id: 'geoshape'
    }
  ],
  [
    'score',
    {
      label: t('Rating'),
      faIcon: 'fa-server',
      id: 'score'
    }
  ],
  [
    'kobomatrix',
    {
      label: t('Question Matrix'),
      faIcon: 'fa-table',
      id: 'kobomatrix'
    }
  ],
  [
    'rank',
    {
      label: t('Ranking'),
      faIcon: 'fa-sort-amount-desc',
      id: 'rank'
    }
  ],
  [
    'calculate',
    {
      label: t('Calculate'),
      faIcon: 'fa-lato-calculate',
      id: 'calculate'
    }
  ],
  [
    'file',
    {
      label: t('File'),
      faIcon: 'fa-file',
      id: 'file'
    }
  ],
  [
    'range',
    {
      label: t('Range'),
      faIcon: 'fa-lato-range',
      id: 'range'
    }
  ]
]);

// TODO: collection will soon be an asset type - remove this when it's true
console.warn('Is collection a type of asset?');

export default {
  QUESTION_TYPES: QUESTION_TYPES,
  AVAILABLE_FORM_STYLES: AVAILABLE_FORM_STYLES,
  update_states: update_states,
  VALIDATION_STATUSES: VALIDATION_STATUSES,
  VALIDATION_STATUSES_LIST: VALIDATION_STATUSES_LIST,
  PROJECT_SETTINGS_CONTEXTS: PROJECT_SETTINGS_CONTEXTS,
  MODAL_TYPES: MODAL_TYPES,
  ASSET_TYPES: ASSET_TYPES,
  HOOK_LOG_STATUSES: HOOK_LOG_STATUSES
};
