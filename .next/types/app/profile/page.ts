<<<<<<< HEAD
// File: C:\Users\sagar\OneDrive\Desktop\copy\letscode\app\profile\page.jsx
=======
<<<<<<< HEAD
<<<<<<<< HEAD:.next/types/app/profile/page.ts
// File: C:\Users\sagar\OneDrive\Desktop\copy\letscode\app\profile\page.jsx
=======
<<<<<<< HEAD
// File: C:\Users\sagar\OneDrive\Desktop\copy\letscode\app\profile\page.jsx
=======
<<<<<<<< HEAD:.next/types/app/explore/page.ts
// File: C:\Users\sagar\OneDrive\Desktop\copy\letscode\app\explore\page.tsx
import * as entry from '../../../../app/explore/page.js'
import type { ResolvingMetadata } from 'next/dist/lib/metadata/types/metadata-interface.js'

type TEntry = typeof import('../../../../app/explore/page.js')
========
// File: C:\Users\sagar\OneDrive\Desktop\copy\letscode\app\profile\page.tsx
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
import * as entry from '../../../../app/profile/page.js'
import type { ResolvingMetadata } from 'next/dist/lib/metadata/types/metadata-interface.js'

type TEntry = typeof import('../../../../app/profile/page.js')
<<<<<<< HEAD
=======
<<<<<<< HEAD
========
// File: C:\Users\sagar\OneDrive\Desktop\copy\letscode\app\courses\cpp\page.tsx
import * as entry from '../../../../../app/courses/cpp/page.js'
import type { ResolvingMetadata } from 'next/dist/lib/metadata/types/metadata-interface.js'

type TEntry = typeof import('../../../../../app/courses/cpp/page.js')
>>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e:.next/types/app/courses/cpp/page.ts
=======
<<<<<<< HEAD
=======
>>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9:.next/types/app/profile/page.ts
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863

// Check that the entry is a valid entry
checkFields<Diff<{
  default: Function
  config?: {}
  generateStaticParams?: Function
  revalidate?: RevalidateRange<TEntry> | false
  dynamic?: 'auto' | 'force-dynamic' | 'error' | 'force-static'
  dynamicParams?: boolean
  fetchCache?: 'auto' | 'force-no-store' | 'only-no-store' | 'default-no-store' | 'default-cache' | 'only-cache' | 'force-cache'
  preferredRegion?: 'auto' | 'global' | 'home' | string | string[]
  runtime?: 'nodejs' | 'experimental-edge' | 'edge'
  maxDuration?: number
  
  metadata?: any
  generateMetadata?: Function
  
}, TEntry, ''>>()

// Check the prop type of the entry function
checkFields<Diff<PageProps, FirstArg<TEntry['default']>, 'default'>>()

// Check the arguments and return type of the generateMetadata function
if ('generateMetadata' in entry) {
  checkFields<Diff<PageProps, FirstArg<MaybeField<TEntry, 'generateMetadata'>>, 'generateMetadata'>>()
  checkFields<Diff<ResolvingMetadata, SecondArg<MaybeField<TEntry, 'generateMetadata'>>, 'generateMetadata'>>()
}

// Check the arguments and return type of the generateStaticParams function
if ('generateStaticParams' in entry) {
  checkFields<Diff<{ params: PageParams }, FirstArg<MaybeField<TEntry, 'generateStaticParams'>>, 'generateStaticParams'>>()
  checkFields<Diff<{ __tag__: 'generateStaticParams', __return_type__: any[] | Promise<any[]> }, { __tag__: 'generateStaticParams', __return_type__: ReturnType<MaybeField<TEntry, 'generateStaticParams'>> }>>()
}

type PageParams = any
export interface PageProps {
  params?: any
  searchParams?: any
}
export interface LayoutProps {
  children?: React.ReactNode

  params?: any
}

// =============
// Utility types
type RevalidateRange<T> = T extends { revalidate: any } ? NonNegative<T['revalidate']> : never

// If T is unknown or any, it will be an empty {} type. Otherwise, it will be the same as Omit<T, keyof Base>.
type OmitWithTag<T, K extends keyof any, _M> = Omit<T, K>
type Diff<Base, T extends Base, Message extends string = ''> = 0 extends (1 & T) ? {} : OmitWithTag<T, keyof Base, Message>

type FirstArg<T extends Function> = T extends (...args: [infer T, any]) => any ? unknown extends T ? any : T : never
type SecondArg<T extends Function> = T extends (...args: [any, infer T]) => any ? unknown extends T ? any : T : never
type MaybeField<T, K extends string> = T extends { [k in K]: infer G } ? G extends Function ? G : never : never



function checkFields<_ extends { [k in keyof any]: never }>() {}

// https://github.com/sindresorhus/type-fest
type Numeric = number | bigint
type Zero = 0 | 0n
type Negative<T extends Numeric> = T extends Zero ? never : `${T}` extends `-${string}` ? T : never
type NonNegative<T extends Numeric> = T extends Zero ? T : Negative<T> extends never ? T : '__invalid_negative_number__'
