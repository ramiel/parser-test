import {Trans, useTranslation} from 'react-i18next';

const Component = () => {
  const {t} = useTranslation()
  return <div>
      <Trans>This should be only the key, not the value</Trans>
      {t('This is just the key, as it should be')}
    </div>
}

export default Component
