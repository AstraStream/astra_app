import Icons from "@/components/Icons";

export const links = {
    menu: [
        {
            Icon: Icons.home,
            title: "Home",
            route: "/"
        }
    ],
    library: [
        {
            Icon: Icons.user,
            title: "Artists",
            route: "/artists",
            isActive: true
        },
        {
            Icon: Icons.disc,
            title: "Albums",
            route: "/albums",
            isActive: true
        },
        {
            Icon: Icons.song,
            title: "Genres",
            route: "/genres",
            isActive: true
        },
        {
            Icon: Icons.heart,
            title: "Liked Songs",
            route: "/liked",
            isActive: true
        }
    ]
}