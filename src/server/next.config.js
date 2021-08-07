module.exports = {
    async rewrites() {
        return {
            // After checking all Next.js pages (including dynamic routes)
            // and static files we proxy any other requests
            fallback: [
                {
                    source: '/:path*',
                    destination: `https://proxy.example.com/:path*`,
                },
            ],
        }

        // For versions of Next.js < v10.1 you can use a no-op rewrite instead
        return [
            // we need to define a no-op rewrite to trigger checking
            // all pages/static files before we attempt proxying
            {
                source: '/:path*',
                destination: '/:path*',
            },
            {
                source: '/:path*',
                destination: `https://proxy.example.com/:path*`,
            },
        ]
    },
}