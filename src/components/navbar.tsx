import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

function Navbar() {
  return (
    <NavigationMenu className="min-w-full border-b sticky min-h-10 top-0 bg-white">
      <div className="flex w-full h-full justify-between">
        <div className="flex-1" />
        <NavigationMenuList className="flex justify-end">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="h-10 px-4 font-medium tracking-tight text-[13px]"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  )
}

export { Navbar }
