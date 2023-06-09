import ono from '@jsdevtools/ono';
import Chain from './chain';
import { UnknownChainError, ChainsIsNotInitializedError } from './errors';
import Registrator from "./registrator";
import PersonalData from "./personalData";
var ChainsSingleton = /** @class */ (function () {
    function ChainsSingleton() {
        this.chainsByName = {};
        this.initialized = false;
        this.rootChain = 'unknown';
        this.registrator = new Registrator(null);
        this.personalData = new PersonalData(null);
    }
    ChainsSingleton.prototype.init = function (config, authKeySearchCallback, signatureProviderMaker, chainCrypt, textDecoder, textEncoder) {
        if (this.initialized) {
            return;
        }
        this.textDecoder = textDecoder;
        this.textEncoder = textEncoder;
        if (config.personalData) {
            this.personalData.setConfig(config.personalData);
        }
        for (var _i = 0, _a = config.chains; _i < _a.length; _i++) {
            var chain = _a[_i];
            this.chainsByName[chain.name] = new Chain(chain, config.tableCodeConfig, this.personalData, authKeySearchCallback, signatureProviderMaker, chainCrypt, this.textDecoder, this.textEncoder);
        }
        this.rootChain = config.ual.rootChain;
        if (config.registrator) {
            this.registrator.setConfig(config.registrator);
        }
        this.initialized = true;
    };
    ChainsSingleton.prototype.checkChainsIsInitialized = function () {
        if (!this.initialized) {
            throw ono(new ChainsIsNotInitializedError('Chains is not initialized'));
        }
    };
    ChainsSingleton.prototype.getChainByName = function (name) {
        this.checkChainsIsInitialized();
        var chain = this.chainsByName[name];
        if (!chain) {
            throw ono(new UnknownChainError("Chain \"".concat(name, "\" not found")));
        }
        return chain;
    };
    ChainsSingleton.prototype.getRootChain = function () {
        return this.getChainByName(this.rootChain);
    };
    return ChainsSingleton;
}());
export default ChainsSingleton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW5zU2luZ2xldG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHMvc3JjL2Jsb2NrY2hhaW4vY2hhaW5zU2luZ2xldG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sR0FBRyxNQUFNLGlCQUFpQixDQUFBO0FBR2pDLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQTtBQUUzQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDekUsT0FBTyxXQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBTTFDO0lBU0U7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELDhCQUFJLEdBQUosVUFDSSxNQUFjLEVBQ2QscUJBQTZDLEVBQzdDLHNCQUErQyxFQUMvQyxVQUF1QixFQUN2QixXQUFnQyxFQUNoQyxXQUFnQztRQUVsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsT0FBTTtTQUNQO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFFOUIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUNqRDtRQUVELEtBQW9CLFVBQWEsRUFBYixLQUFBLE1BQU0sQ0FBQyxNQUFNLEVBQWIsY0FBYSxFQUFiLElBQWEsRUFBRTtZQUE5QixJQUFNLEtBQUssU0FBQTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUNyQyxLQUFLLEVBQ0wsTUFBTSxDQUFDLGVBQWUsRUFDdEIsSUFBSSxDQUFDLFlBQVksRUFDakIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0QixVQUFVLEVBQ1YsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FDbkIsQ0FBQTtTQUNGO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQTtRQUNyQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7SUFDekIsQ0FBQztJQUVELGtEQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxDQUFDLElBQUksMkJBQTJCLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFBO1NBQ3hFO0lBQ0gsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxJQUFZO1FBQ3pCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFBO1FBRS9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFckMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sR0FBRyxDQUFDLElBQUksaUJBQWlCLENBQUMsa0JBQVUsSUFBSSxpQkFBYSxDQUFDLENBQUMsQ0FBQTtTQUM5RDtRQUVELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUE3RUQsSUE2RUM7QUFFRCxlQUFlLGVBQWUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbm8gZnJvbSAnQGpzZGV2dG9vbHMvb25vJ1xuaW1wb3J0IHtUZXh0RGVjb2RlciwgVGV4dEVuY29kZXJ9IGZyb20gJ3RleHQtZW5jb2RpbmcnXG5cbmltcG9ydCBDaGFpbiBmcm9tICcuL2NoYWluJ1xuaW1wb3J0IHtDb25maWcsIFNpZ25hdHVyZVByb3ZpZGVyTWFrZXIsIEF1dGhLZXlTZWFyY2hDYWxsYmFjaywgQ2hhaW5DcnlwdH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IFVua25vd25DaGFpbkVycm9yLCBDaGFpbnNJc05vdEluaXRpYWxpemVkRXJyb3IgfSBmcm9tICcuL2Vycm9ycydcbmltcG9ydCBSZWdpc3RyYXRvciBmcm9tIFwiLi9yZWdpc3RyYXRvclwiO1xuaW1wb3J0IFBlcnNvbmFsRGF0YSBmcm9tIFwiLi9wZXJzb25hbERhdGFcIjtcblxuaW50ZXJmYWNlIENoYWluc0J5TmFtZSB7XG4gIFtrZXk6IHN0cmluZ106IENoYWluXG59XG5cbmNsYXNzIENoYWluc1NpbmdsZXRvbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2hhaW5zQnlOYW1lOiBDaGFpbnNCeU5hbWVcbiAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhblxuICBwcml2YXRlIHJvb3RDaGFpbjogc3RyaW5nXG4gIHB1YmxpYyByZWdpc3RyYXRvcjogUmVnaXN0cmF0b3JcbiAgcHVibGljIHBlcnNvbmFsRGF0YTogUGVyc29uYWxEYXRhXG4gIHB1YmxpYyB0ZXh0RGVjb2Rlcj86IHR5cGVvZiBUZXh0RGVjb2RlclxuICBwdWJsaWMgdGV4dEVuY29kZXI/OiB0eXBlb2YgVGV4dEVuY29kZXJcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoYWluc0J5TmFtZSA9IHt9XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlXG4gICAgdGhpcy5yb290Q2hhaW4gPSAndW5rbm93bidcbiAgICB0aGlzLnJlZ2lzdHJhdG9yID0gbmV3IFJlZ2lzdHJhdG9yKG51bGwpXG4gICAgdGhpcy5wZXJzb25hbERhdGEgPSBuZXcgUGVyc29uYWxEYXRhKG51bGwpXG4gIH1cblxuICBpbml0KFxuICAgICAgY29uZmlnOiBDb25maWcsXG4gICAgICBhdXRoS2V5U2VhcmNoQ2FsbGJhY2s/OiBBdXRoS2V5U2VhcmNoQ2FsbGJhY2ssXG4gICAgICBzaWduYXR1cmVQcm92aWRlck1ha2VyPzogU2lnbmF0dXJlUHJvdmlkZXJNYWtlcixcbiAgICAgIGNoYWluQ3J5cHQ/OiBDaGFpbkNyeXB0LFxuICAgICAgdGV4dERlY29kZXI/OiB0eXBlb2YgVGV4dERlY29kZXIsXG4gICAgICB0ZXh0RW5jb2Rlcj86IHR5cGVvZiBUZXh0RW5jb2RlcixcbiAgICApIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50ZXh0RGVjb2RlciA9IHRleHREZWNvZGVyXG4gICAgdGhpcy50ZXh0RW5jb2RlciA9IHRleHRFbmNvZGVyXG5cbiAgICBpZiAoY29uZmlnLnBlcnNvbmFsRGF0YSkge1xuICAgICAgdGhpcy5wZXJzb25hbERhdGEuc2V0Q29uZmlnKGNvbmZpZy5wZXJzb25hbERhdGEpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGFpbiBvZiBjb25maWcuY2hhaW5zKSB7XG4gICAgICB0aGlzLmNoYWluc0J5TmFtZVtjaGFpbi5uYW1lXSA9IG5ldyBDaGFpbihcbiAgICAgICAgICBjaGFpbixcbiAgICAgICAgICBjb25maWcudGFibGVDb2RlQ29uZmlnLFxuICAgICAgICAgIHRoaXMucGVyc29uYWxEYXRhLFxuICAgICAgICAgIGF1dGhLZXlTZWFyY2hDYWxsYmFjayxcbiAgICAgICAgICBzaWduYXR1cmVQcm92aWRlck1ha2VyLFxuICAgICAgICAgIGNoYWluQ3J5cHQsXG4gICAgICAgICAgdGhpcy50ZXh0RGVjb2RlcixcbiAgICAgICAgICB0aGlzLnRleHRFbmNvZGVyXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5yb290Q2hhaW4gPSBjb25maWcudWFsLnJvb3RDaGFpblxuICAgIGlmIChjb25maWcucmVnaXN0cmF0b3IpIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0b3Iuc2V0Q29uZmlnKGNvbmZpZy5yZWdpc3RyYXRvcilcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWVcbiAgfVxuXG4gIGNoZWNrQ2hhaW5zSXNJbml0aWFsaXplZCgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRocm93IG9ubyhuZXcgQ2hhaW5zSXNOb3RJbml0aWFsaXplZEVycm9yKCdDaGFpbnMgaXMgbm90IGluaXRpYWxpemVkJykpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hhaW5CeU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGVja0NoYWluc0lzSW5pdGlhbGl6ZWQoKVxuXG4gICAgY29uc3QgY2hhaW4gPSB0aGlzLmNoYWluc0J5TmFtZVtuYW1lXVxuXG4gICAgaWYgKCFjaGFpbikge1xuICAgICAgdGhyb3cgb25vKG5ldyBVbmtub3duQ2hhaW5FcnJvcihgQ2hhaW4gXCIke25hbWV9XCIgbm90IGZvdW5kYCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYWluXG4gIH1cblxuICBnZXRSb290Q2hhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hhaW5CeU5hbWUodGhpcy5yb290Q2hhaW4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhaW5zU2luZ2xldG9uXG4iXX0=