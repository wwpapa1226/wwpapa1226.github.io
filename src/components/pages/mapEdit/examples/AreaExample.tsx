import { MapContent } from '../3d/MapContent';
import { MapGrid } from '../3d/MapGrid';
import { WorldMap } from '../3d/WorldMap';
import { useMapContent } from '../hooks/useMapContent';

const input = `
    $area
    (5500,3550)(5550,3500)
    (5560,3510)(5600,3550) city #cBA6E34
    (5550,3580)(5530,3560) city #cBE393A
    (5590,3560)(5560,3590) #c4D85BE

    $marker
    (5500,3550) A1
    (5550,3500) A2
    (5560,3510) B1
    (5600,3550) B2
    (5550,3580) C1
    (5530,3560) C2
    (5590,3560) D1
    (5560,3590) D2
`;

export const AreaExample = () => {
    const { mapContent } = useMapContent(input);

    return (
        <WorldMap systemName="Example Star System" size={9000} empty={true}>
            <MapGrid />
            {mapContent && (
                <MapContent mapContent={mapContent} />
            )}
        </WorldMap>
    );
};
