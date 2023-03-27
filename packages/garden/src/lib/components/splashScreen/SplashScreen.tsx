import { CircularProgress } from '@equinor/eds-core-react';

export function SplashScreen() {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress size={48} />
      <div>Preparing garden</div>
    </div>
  );
}
