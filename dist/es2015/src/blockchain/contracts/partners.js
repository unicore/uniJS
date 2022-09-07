import BaseContract from './base';
class PartnersContract extends BaseContract {
    constructor(api, tableCodeConfig) {
        super(api, tableCodeConfig, 'part');
    }
    getAccountPartner(accountName) {
        return this.getSingleTableRow({
            table: 'partners2',
            lower_bound: accountName,
            upper_bound: accountName,
            limit: 1,
            parseMetaAsJson: true,
        });
    }
}
export default PartnersContract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydG5lcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90cy9zcmMvYmxvY2tjaGFpbi9jb250cmFjdHMvcGFydG5lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxZQUFZLE1BQU0sUUFBUSxDQUFBO0FBS2pDLE1BQU0sZ0JBQWlCLFNBQVEsWUFBWTtJQUN6QyxZQUFZLEdBQVksRUFBRSxlQUFnQztRQUN4RCxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsV0FBd0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQWE7WUFDeEMsS0FBSyxFQUFFLFdBQVc7WUFDbEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsS0FBSyxFQUFFLENBQUM7WUFDUixlQUFlLEVBQUUsSUFBSTtTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFFRCxlQUFlLGdCQUFnQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudE5hbWUgfSBmcm9tICcuLi8uLi9lb3MvdHlwZXMnXG5pbXBvcnQgUmVhZEFwaSBmcm9tICcuLi9yZWFkQXBpJ1xuaW1wb3J0IHsgVGFibGVDb2RlQ29uZmlnIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgQmFzZUNvbnRyYWN0IGZyb20gJy4vYmFzZSdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbnR5cGUgUGFydG5lclJvdyA9IGFueVxuXG5jbGFzcyBQYXJ0bmVyc0NvbnRyYWN0IGV4dGVuZHMgQmFzZUNvbnRyYWN0IHtcbiAgY29uc3RydWN0b3IoYXBpOiBSZWFkQXBpLCB0YWJsZUNvZGVDb25maWc6IFRhYmxlQ29kZUNvbmZpZykge1xuICAgIHN1cGVyKGFwaSwgdGFibGVDb2RlQ29uZmlnLCAncGFydCcpXG4gIH1cblxuICBnZXRBY2NvdW50UGFydG5lcihhY2NvdW50TmFtZTogQWNjb3VudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTaW5nbGVUYWJsZVJvdzxQYXJ0bmVyUm93Pih7XG4gICAgICB0YWJsZTogJ3BhcnRuZXJzMicsXG4gICAgICBsb3dlcl9ib3VuZDogYWNjb3VudE5hbWUsXG4gICAgICB1cHBlcl9ib3VuZDogYWNjb3VudE5hbWUsXG4gICAgICBsaW1pdDogMSxcbiAgICAgIHBhcnNlTWV0YUFzSnNvbjogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRuZXJzQ29udHJhY3RcbiJdfQ==