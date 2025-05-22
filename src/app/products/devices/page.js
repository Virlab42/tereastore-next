export const dynamic = 'force-dynamic';
import ClientFilters from './client'

async function fetchItems() {
    const res = await fetch('https://tereastore.ru/api/products/getdevices', { cache: 'no-store' });
    if (!res.ok) throw new Error('Ошибка загрузки товаров');
    return res.json();
}

export async function generateMetadata() {
    const title = 'Купить аксессуары для IQOS ILUMA в TereaStore с доставкой по России';
    return {
        title,
        description: 'Каталог аксессуаров для устройств IQOS ILUMA с доставкой по всей России. Лучший выбор вкусов и брендов!',
        alternates: {
            canonical: `https://tereastore.ru/products/devices`
          },
          openGraph: {
              title: `Купить аксессуары для IQOS ILUMA в TereaStore с доставкой по России`,
              description: `Каталог аксессуаров для устройств IQOS ILUMA с доставкой по всей России. Лучший выбор вкусов и брендов!`,
              url: `https://tereastore.ru/products/devices`,
              images: [
                  {
                      url: `/favicon/web-app-manifest-512x512`,
                      alt: `IqosIluma`,
                  },
              ],
          },
    };
}

export default async function Page() {
    let items = [];
    try {
        items = await fetchItems();
    } catch (error) {
        console.error(error);
        return <p>Ошибка загрузки данных</p>;
    }

    return (
        <div className="products-container">
            <h1>Аксессуары Iluma</h1>
            <ClientFilters items={items} />
        </div>
    );
}
