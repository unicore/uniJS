import ono from "@jsdevtools/ono";
import axios from "axios";
import { PersonalDataIsNotConfigured } from "./errors";
class PersonalData {
    constructor(config) {
        this.config = config;
    }
    setConfig(config) {
        this.config = config;
    }
    getUrl(path) {
        if (!this.config) {
            throw ono(new PersonalDataIsNotConfigured(`personal data config is empty`));
        }
        return `${this.config.api}${path}`.replace(/\/\/+/g, '/');
    }
    post(path, data) {
        return axios.post(this.getUrl(path), data, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }).then(r => r.data);
    }
    get(path, params) {
        return axios.get(this.getUrl(path), {
            params: params || {},
            headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
        }).then(r => r.data);
    }
    sendPersonalData(dataBundle, signature) {
        return this.post('/add-data', {
            data: dataBundle,
            signature,
        });
    }
    getPersonalDataAsRecipient(dataBundle, signature) {
        return this.get('/get-data-as-recipient', {
            data: dataBundle,
            signature,
        });
    }
    getPersonalDataAsSender(dataBundle, signature) {
        return this.get('/get-data-as-sender', {
            data: dataBundle,
            signature,
        });
    }
}
export default PersonalData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxEYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHMvc3JjL2Jsb2NrY2hhaW4vcGVyc29uYWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sR0FBRyxNQUFNLGlCQUFpQixDQUFDO0FBQ2xDLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQixPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFckQsTUFBTSxZQUFZO0lBR2QsWUFBWSxNQUFpQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQTBCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsTUFBTSxHQUFHLENBQUMsSUFBSSwyQkFBMkIsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUE7U0FDOUU7UUFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVksRUFBRSxJQUFTO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JKLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBWSxFQUFFLE1BQVk7UUFDMUIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxFQUFFLE1BQU0sSUFBSSxFQUFFO1lBQ3BCLE9BQU8sRUFBRSxFQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUM7U0FDcEYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBZ0csRUFBRSxTQUFpQjtRQUNoSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzFCLElBQUksRUFBRSxVQUFVO1lBQ2hCLFNBQVM7U0FDWixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsMEJBQTBCLENBQUMsVUFBaUQsRUFBRSxTQUFpQjtRQUMzRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUU7WUFDdEMsSUFBSSxFQUFFLFVBQVU7WUFDaEIsU0FBUztTQUNaLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxVQUE4QyxFQUFFLFNBQWlCO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtZQUNuQyxJQUFJLEVBQUUsVUFBVTtZQUNoQixTQUFTO1NBQ1osQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBRUQsZUFBZSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb25vIGZyb20gXCJAanNkZXZ0b29scy9vbm9cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7UGVyc29uYWxEYXRhQ29uZmlnfSBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQge1BlcnNvbmFsRGF0YUlzTm90Q29uZmlndXJlZH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5cbmNsYXNzIFBlcnNvbmFsRGF0YSB7XG4gICAgY29uZmlnOiBQZXJzb25hbERhdGFDb25maWcgfCBudWxsXG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFBlcnNvbmFsRGF0YUNvbmZpZyB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICB9XG5cbiAgICBzZXRDb25maWcoY29uZmlnOiBQZXJzb25hbERhdGFDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICB9XG5cbiAgICBnZXRVcmwocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgb25vKG5ldyBQZXJzb25hbERhdGFJc05vdENvbmZpZ3VyZWQoYHBlcnNvbmFsIGRhdGEgY29uZmlnIGlzIGVtcHR5YCkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuYXBpfSR7cGF0aH1gLnJlcGxhY2UoL1xcL1xcLysvZywgJy8nKVxuICAgIH1cblxuICAgIHBvc3QocGF0aDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QodGhpcy5nZXRVcmwocGF0aCksIGRhdGEsIHtoZWFkZXJzOiB7J0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KS50aGVuKHIgPT4gci5kYXRhKVxuICAgIH1cblxuICAgIGdldChwYXRoOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHRoaXMuZ2V0VXJsKHBhdGgpLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyB8fCB7fSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgfSkudGhlbihyID0+IHIuZGF0YSlcbiAgICB9XG5cbiAgICBzZW5kUGVyc29uYWxEYXRhKGRhdGFCdW5kbGU6IHtzZW5kZXJQdWI6IHN0cmluZywgcmVjaXBpZW50UHViOiBzdHJpbmcsIHNlbmRlckRhdGE6IHN0cmluZywgcmVjaXBpZW50RGF0YTogc3RyaW5nfSwgc2lnbmF0dXJlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnL2FkZC1kYXRhJywge1xuICAgICAgICAgICAgZGF0YTogZGF0YUJ1bmRsZSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRQZXJzb25hbERhdGFBc1JlY2lwaWVudChkYXRhQnVuZGxlOiB7cmVjaXBpZW50UHViOiBzdHJpbmcsIGlkczogc3RyaW5nW119LCBzaWduYXR1cmU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJy9nZXQtZGF0YS1hcy1yZWNpcGllbnQnLCB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhQnVuZGxlLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFBlcnNvbmFsRGF0YUFzU2VuZGVyKGRhdGFCdW5kbGU6IHtzZW5kZXJQdWI6IHN0cmluZywgaWRzOiBzdHJpbmdbXX0sIHNpZ25hdHVyZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnL2dldC1kYXRhLWFzLXNlbmRlcicsIHtcbiAgICAgICAgICAgIGRhdGE6IGRhdGFCdW5kbGUsXG4gICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbERhdGE7Il19