type PageType = {
  title: string
  route: string
}

export const ADMIN_REQUEST_ROUTE = '/admin/requests'

export const pages: PageType[] = [
  { title: 'Requests', route: ADMIN_REQUEST_ROUTE },
  { title: 'Products', route: '/admin/products' },
]
