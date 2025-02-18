import type { MainSettings } from '@server/lib/settings';
import { getSettings } from '@server/lib/settings';

class RestartFlag {
  private settings: MainSettings;

  public initializeSettings(settings: MainSettings): void {
    this.settings = { ...settings };
  }

  public isSet(): boolean {
    const settings = getSettings().main;

    return (
      this.settings.csrfProtection !== settings.csrfProtection ||
      this.settings.trustProxy !== settings.trustProxy ||
      this.settings.proxy.enabled !== settings.proxy.enabled ||
      this.settings.forceIpv4First !== settings.forceIpv4First ||
      this.settings.dnsServers !== settings.dnsServers
    );
  }
}

const restartFlag = new RestartFlag();

export default restartFlag;
