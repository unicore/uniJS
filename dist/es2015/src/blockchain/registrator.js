import ono from "@jsdevtools/ono";
import axios from "axios";
import { RegistratorIsNotConfigured } from "./errors";
class Registrator {
    constructor(config) {
        this.config = config;
    }
    setConfig(config) {
        this.config = config;
    }
    getUrl(path) {
        if (!this.config) {
            throw ono(new RegistratorIsNotConfigured(`registrator config is empty`));
        }
        return `${this.config.api}${path}`.replace(/\/\/+/g, '/').replace('http:/', 'http://').replace('https:/', 'https://');
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
    setAccount(username, pub, ownerpub, email, referer, callback, accountType, meta) {
        return this.get('/set', {
            username,
            active_pub: pub,
            owner_pub: ownerpub,
            email,
            locale: 'ru',
            referer,
            callback,
            type: accountType,
            meta: meta,
        });
    }
    checkEmail(email) {
        return this.get('/check', {
            email,
        });
    }
}
export default Registrator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi90cy9zcmMvYmxvY2tjaGFpbi9yZWdpc3RyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQztBQUNsQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFMUIsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBR3BELE1BQU0sV0FBVztJQUdiLFlBQVksTUFBZ0M7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUF5QjtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE1BQU0sR0FBRyxDQUFDLElBQUksMEJBQTBCLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFBO1NBQzNFO1FBRUQsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ3pILENBQUM7SUFFRCxJQUFJLENBQUMsSUFBWSxFQUFFLElBQVM7UUFDeEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckosQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZLEVBQUUsTUFBWTtRQUMxQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxNQUFNLEVBQUUsTUFBTSxJQUFJLEVBQUU7WUFDcEIsT0FBTyxFQUFFLEVBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBQztTQUNwRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxVQUFVLENBQUMsUUFBcUIsRUFBRSxHQUFXLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsT0FBc0IsRUFBRSxRQUFnQixFQUFFLFdBQW1CLEVBQUUsSUFBWTtRQUN2SixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3BCLFFBQVE7WUFDUixVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxRQUFRO1lBQ25CLEtBQUs7WUFDTCxNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU87WUFDUCxRQUFRO1lBQ1IsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUN0QixLQUFLO1NBQ1IsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBRUQsZUFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb25vIGZyb20gXCJAanNkZXZ0b29scy9vbm9cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7UmVnaXN0cmF0b3JDb25maWd9IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7UmVnaXN0cmF0b3JJc05vdENvbmZpZ3VyZWR9IGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0IHtBY2NvdW50TmFtZX0gZnJvbSBcIi4uL2Vvcy90eXBlc1wiO1xuXG5jbGFzcyBSZWdpc3RyYXRvciB7XG4gICAgY29uZmlnOiBSZWdpc3RyYXRvckNvbmZpZyB8IG51bGxcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUmVnaXN0cmF0b3JDb25maWcgfCBudWxsKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG4gICAgfVxuXG4gICAgc2V0Q29uZmlnKGNvbmZpZzogUmVnaXN0cmF0b3JDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICB9XG5cbiAgICBnZXRVcmwocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgb25vKG5ldyBSZWdpc3RyYXRvcklzTm90Q29uZmlndXJlZChgcmVnaXN0cmF0b3IgY29uZmlnIGlzIGVtcHR5YCkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuYXBpfSR7cGF0aH1gLnJlcGxhY2UoL1xcL1xcLysvZywgJy8nKS5yZXBsYWNlKCdodHRwOi8nLCAnaHR0cDovLycpLnJlcGxhY2UoJ2h0dHBzOi8nLCAnaHR0cHM6Ly8nKVxuICAgIH1cblxuICAgIHBvc3QocGF0aDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QodGhpcy5nZXRVcmwocGF0aCksIGRhdGEsIHtoZWFkZXJzOiB7J0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319KS50aGVuKHIgPT4gci5kYXRhKVxuICAgIH1cblxuICAgIGdldChwYXRoOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHRoaXMuZ2V0VXJsKHBhdGgpLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyB8fCB7fSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgfSkudGhlbihyID0+IHIuZGF0YSlcbiAgICB9XG5cbiAgICBzZXRBY2NvdW50KHVzZXJuYW1lOiBBY2NvdW50TmFtZSwgcHViOiBzdHJpbmcsIG93bmVycHViOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHJlZmVyZXI6IHN0cmluZyB8IG51bGwsIGNhbGxiYWNrOiBzdHJpbmcsIGFjY291bnRUeXBlOiBzdHJpbmcsIG1ldGE6IFN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJy9zZXQnLCB7XG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIGFjdGl2ZV9wdWI6IHB1YixcbiAgICAgICAgICAgIG93bmVyX3B1Yjogb3duZXJwdWIsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIGxvY2FsZTogJ3J1JyxcbiAgICAgICAgICAgIHJlZmVyZXIsXG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIHR5cGU6IGFjY291bnRUeXBlLFxuICAgICAgICAgICAgbWV0YTogbWV0YSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjaGVja0VtYWlsKGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCcvY2hlY2snLCB7XG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdG9yOyJdfQ==